from rest_framework.test import APITestCase
import jwt
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import force_authenticate


class TestWordPairs(APITestCase):
  fixtures=['sample_data']

  def setUp(self):
      user = User.objects.create_user(
          username='test_user',
          password='TestTest99'
      )
      self.token = jwt.encode(
          { 'id': user.id, 'username': user.username }, "SECRET_KEY"
      ).decode('utf-8')
      self.client.credentials(HTTP_X_TOKEN=self.token)

  def test_load_word_pairs(self):
    # word-pair/?sortColumn=base&sortDirection=asc&startOffset=0&endOffset=5

    url = reverse('wordpair-list')
    input_params = {
        'startOffset': 0,
        'endOffset': 5,
        'sortColumn': 'base',
        'sortDirection': 'asc'
    }
    response = self.client.get(
        url, input_params, format='json'
    )
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    expected_res = {
        'data': [
            ('bedroom', 'ložnice'),
            ('bird', 'pták'),
            ('camel', 'velbloud'),
            ('carrot', 'mrkev'),
            ('cat', 'kočka')
        ],
        'totalRecords': 32,
    }
    self.assertEqual(response.data['totalRecords'], expected_res['totalRecords'])
    self.assertEqual(
        [(item['base'], item['translated']) for item in response.data['data']], 
        expected_res['data']
    )

  def test_load_filtered_word_pairs(self):
      # word-pair/?sortColumn=base&sortDirection=asc&startOffset=0&endOffset=5
      # &filterColumn=category&filterValue=1

      url = reverse('wordpair-list')
      input_params = {
          'startOffset': 0,
          'endOffset': 5,
          'sortColumn': 'base',
          'sortDirection': 'asc',
          'filterColumn': 'category',
          'filterValue': 1
      }

      response = self.client.get(url, input_params, format='json')
      self.assertEqual(response.status_code, status.HTTP_200_OK)

      expected_res = {
        'totalRecords': 13,
        'data': [
            ('bird', 'pták'),
            ('camel', 'velbloud'),
            ('cat', 'kočka'),
            ('chicken', 'kuře'),
            ('cow', 'kráva')
        ],
      }
      self.assertEqual(response.data['totalRecords'], expected_res['totalRecords'])
      self.assertEqual(
          [(item['base'], item['translated']) for item in response.data['data']], 
          expected_res['data']
      )

  def test_load_word_pairs_missing_pagination_params(self):
      # word-pair/

      url = reverse('wordpair-list')

      response = self.client.get(url, format='json')
      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertEqual(response.data['totalRecords'], 32)
      self.assertEqual(len(response.data['data']), 32)

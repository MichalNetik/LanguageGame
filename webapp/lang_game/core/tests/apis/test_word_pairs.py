from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status

class TestWordPairs(APITestCase):
  fixtures=['sample_data']

  def test_load_word_pairs(self):
    # word-pair/?sortColumn=base&sortDirection=asc&startOffset=0&endOffset=5

    url = reverse('wordpair-list')
    input_params = {
        'startOffset': 0,
        'endOffset': 5,
        'sortColumn': 'base',
        'sortDirection': 'asc'
    }

    response = self.client.get(url, input_params, format='json')
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

  def test_load_word_pairs_missing_mandatory_params(self):
      # word-pair/?sortColumn=base&sortDirection=asc&startOffset=0

      url = reverse('wordpair-list')
      input_params = {
          'startOffset': 0,
          'sortColumn': 'base',
          'sortDirection': 'asc',
      }

      response = self.client.get(url, input_params, format='json')
      self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

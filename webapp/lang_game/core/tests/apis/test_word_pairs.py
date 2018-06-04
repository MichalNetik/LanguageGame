from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status

class TestWordPairs(APITestCase):
  fixture=['sample_data']

  def test_load_word_pairs(self):
    url = reverse('wordpair-list')

    response = self.client.get(url, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
from core.models import WordPair
from rest_framework import serializers


class WordPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordPair
        fields = '__all__'

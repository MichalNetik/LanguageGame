from rest_framework import serializers
from core.serializers.vocabulary_category_serializer import VocabularyCategorySerializer
from core.models import WordPair


class WordPairSerializer(serializers.ModelSerializer):
    category = VocabularyCategorySerializer()
    class Meta:
        model = WordPair
        fields = '__all__'

from core.models import VocabularyCategory
from rest_framework import serializers


class VocabularyCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = VocabularyCategory
        fields = '__all__'

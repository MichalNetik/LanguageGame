from core.models import Vocabulary
from rest_framework import serializers


class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = '__all__'

from core.models import VocabularyCategory
from rest_framework import serializers


class VocabularyCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = VocabularyCategory
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': False, 'required': False, 'allow_null': True},
            'user': {'read_only': False, 'required': False}
        }

    def create(self, validated_data):
        user = self.context.get("request").user
        return VocabularyCategory.objects.create(user=user, **validated_data)

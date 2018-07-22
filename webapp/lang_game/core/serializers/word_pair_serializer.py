from rest_framework import serializers
from core.serializers.vocabulary_category_serializer import VocabularyCategorySerializer
from core.models import WordPair, VocabularyCategory


class WordPairSerializer(serializers.ModelSerializer):
    category = VocabularyCategorySerializer()
    class Meta:
        model = WordPair
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': False, 'required': False, 'allow_null': True}
        }

    def create(self, validated_data):
        validated_data['category'] = VocabularyCategory.objects.get(id=validated_data['category']['id'])
        return WordPair.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.id)
        instance.base = validated_data.get('base', instance.base)
        instance.translated = validated_data.get('translated', instance.translated)
        instance.category = VocabularyCategory.objects.get(id=validated_data['category']['id'])
        instance.save()
        return instance

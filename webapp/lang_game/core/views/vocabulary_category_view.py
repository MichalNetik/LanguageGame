from rest_framework import viewsets
from core.models import VocabularyCategory
from core.serializers.vocabulary_category_serializer import VocabularyCategorySerializer

class VocabularyCategoryViewSet(viewsets.ModelViewSet):
    queryset = VocabularyCategory.objects.all()
    serializer_class = VocabularyCategorySerializer

from rest_framework import viewsets
from core.models import Vocabulary
from core.serializers.vocabulary_serializer import VocabularySerializer

class VocabularyCategoryViewSet(viewsets.ModelViewSet):
    queryset = Vocabulary.objects.all()
    serializer_class = VocabularySerializer

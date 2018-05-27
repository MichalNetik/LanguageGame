from rest_framework import viewsets
from core.models import WordPair
from core.serializers.word_pair_serializer import WordPairSerializer

class WordPairViewSet(viewsets.ModelViewSet):
    queryset = WordPair.objects.all()
    serializer_class = WordPairSerializer

from rest_framework.response import Response

from core.models import WordPair
from core.serializers.word_pair_serializer import WordPairSerializer
from core.views.base_view import BaseViewSet


class WordPairViewSet(BaseViewSet):
    queryset = WordPair.objects.all()
    serializer_class = WordPairSerializer    

    def filter_user(self, query):
        return query.filter(category__user=self.request.user)

    def get_queryset(self):
        query = WordPair.objects.all()
        query = self.filter_user(query)
        return self.get_queryset_for_pagination(query)
    
    def list(self, request):
        queryset = self.get_queryset()
        total_records = len(queryset)
        queryset = self.paginate(queryset)

        serializer = WordPairSerializer(queryset, many=True)
        return Response(
            {
                'data': serializer.data,
                'totalRecords': total_records
            }
        )

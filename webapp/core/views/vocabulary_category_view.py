from rest_framework.response import Response

from core.models import VocabularyCategory
from core.views.base_view import BaseViewSet
from core.serializers.vocabulary_category_serializer import VocabularyCategorySerializer


class VocabularyCategoryViewSet(BaseViewSet):
    queryset = VocabularyCategory.objects.all()
    serializer_class = VocabularyCategorySerializer

    def filter_user(self, query):
        return query.filter(user=self.request.user)

    def get_queryset(self):
        query = VocabularyCategory.objects.all()
        query = self.filter_user(query)
        return self.get_queryset_for_pagination(query)

    def list(self, request):
        queryset = self.get_queryset()
        total_records = len(queryset)
        queryset = self.paginate(queryset)

        serializer = VocabularyCategorySerializer(queryset, many=True)
        return Response(
            {
                'data': serializer.data,
                'totalRecords': total_records
            }
        )

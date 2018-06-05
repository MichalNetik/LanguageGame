from rest_framework import viewsets
from rest_framework.response import Response

from core.models import WordPair
from core.serializers.word_pair_serializer import WordPairSerializer
from ..exceptions import ValidationException
from ..models import WordPair


class WordPairViewSet(viewsets.ModelViewSet):
    queryset = WordPair.objects.all()
    serializer_class = WordPairSerializer
    mandatory_query_parameters = set(
        ['startOffset', 'endOffset', 'sortColumn', 'sortDirection']
    )

    def _filter_query(self, query):
        filter_value = self.request.query_params.get('filterValue')
        filter_column = self.request.query_params.get('filterColumn')
        if filter_value and filter_column:
            query = query.filter(**{filter_column: filter_value})
        return query

    def get_queryset(self):
        self.request.query_params.get('username', None)
        param_set = set(self.request.query_params)

        intersection_length = len(
            self.mandatory_query_parameters.intersection(param_set)
        )
        if  intersection_length == len(self.mandatory_query_parameters):
            query = WordPair.objects.all()
            
            query = self._filter_query(query)

            sort_direction = '-' if self.request.query_params['sortDirection'] == 'desc' else ''
            sort_column = self.request.query_params['sortColumn']
            return query.order_by(f'{sort_direction}{sort_column}')
        else:
            raise ValidationException(
                (
                    'One or more of the mandatory query parameters are missing.' 
                    'The mandatory query parameters are {self.mandatory_query_parameters}'
                )
            )
    
    def _paginate(self, queryset):
        start_offset = int(self.request.query_params['startOffset'])
        end_offset = int(self.request.query_params['endOffset'])
        return queryset[start_offset:end_offset]

    def list(self, request):
        queryset = self.get_queryset()
        total_records = len(queryset) 
        queryset = self._paginate(queryset)

        serializer = WordPairSerializer(queryset, many=True)
        return Response(
            {
                'data': serializer.data,
                'totalRecords': total_records,
                'urlParams': {
                    'startOffset': int(self.request.query_params['startOffset']),
                    'endOffset': int(self.request.query_params['endOffset']),
                    'sortDirection': self.request.query_params['sortDirection'],
                    'sortColumn': self.request.query_params['sortColumn'],
                    'filterValue': self.request.query_params.get('filterValue'),
                    'filterColumn': self.request.query_params.get('filterColumn'),
                }
            }
        )
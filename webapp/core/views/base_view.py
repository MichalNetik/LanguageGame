from rest_framework import viewsets


class BaseViewSet(viewsets.ModelViewSet):
    pagination_mandatory_query_parameters = set(
        ['startOffset', 'endOffset', 'sortColumn', 'sortDirection']
    )

    def get_queryset_for_pagination(self, query):
        self.request.query_params.get('username', None)
        param_set = set(self.request.query_params)

        intersection_length = len(
            self.pagination_mandatory_query_parameters.intersection(param_set)
        )

        if intersection_length == len(self.pagination_mandatory_query_parameters):
            query = self.filter_query(query)

            sort_direction = '-' if self.request.query_params['sortDirection'] == 'desc' else ''
            sort_column = self.request.query_params['sortColumn']
            return query.order_by(f'{sort_direction}{sort_column}')
        else:
            return self.filter_query(query)

    def paginate(self, queryset):
        start_offset = self.request.query_params.get('startOffset')
        end_offset = self.request.query_params.get('endOffset')

        if start_offset and end_offset:
            return queryset[int(start_offset):int(end_offset)]
        else:
            return queryset

    def filter_query(self, query):
        filter_value = self.request.query_params.get('filterValue')
        filter_column = self.request.query_params.get('filterColumn')
        if filter_value and filter_column:
            query = query.filter(**{filter_column: filter_value})
        return query

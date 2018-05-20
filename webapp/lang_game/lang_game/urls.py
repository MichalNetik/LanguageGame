from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.conf.urls import include
from django.urls import path
from core.views import home_view
from core.views import vocabulary_category_view, vocabulary_view

router = DefaultRouter()
router.register('vocabulary', vocabulary_view.VocabularyCategoryViewSet)
router.register('vocabulary-category', vocabulary_category_view.VocabularyCategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home_view.index, name='index'),
    path('<path>/', home_view.index),
]


from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.conf.urls import include
from django.urls import path, re_path
from core.views import home_view
from core.views import vocabulary_category_view, word_pair_view
from custom_auth.views import Login, SignUp

router = DefaultRouter()
router.register('word-pair', word_pair_view.WordPairViewSet)
router.register('vocabulary-category', vocabulary_category_view.VocabularyCategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', Login.as_view()),
    path('api/signup/', SignUp.as_view()),
    path('', home_view.index, name='index'),
    re_path(r'^(?P<path>.*)/$', home_view.index)
]

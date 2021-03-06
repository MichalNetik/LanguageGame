from django.db import models
from django.contrib.auth.models import User


class WordPair(models.Model):
    base = models.CharField(max_length=100)
    translated = models.CharField(max_length=100)
    description = models.CharField(max_length=300, null=True, blank=True)
    category = models.ForeignKey('VocabularyCategory', on_delete=models.CASCADE)

    def __str__(self):
        return '{0} -> {1} in {2}'.format(self.base, self.translated, self.category)


class VocabularyCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

from django.db import models

class Vocabulary(models.Model):
    original = models.CharField(max_length=100)
    translation = models.CharField(max_length=100)
    description = models.CharField(max_length=300, null=True)
    category = models.ForeignKey('VocabularyCategory', on_delete=models.CASCADE)

    def __str__(self):
        return '{0} -> {1} in {2}'.format(self.original, self.translation, self.category)

class VocabularyCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


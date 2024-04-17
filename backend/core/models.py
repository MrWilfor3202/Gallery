from pydoc import describe
from django.db import models
from django.utils import timezone


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    pub_date = models.DateTimeField(auto_now=True )
    Image = models.ImageField(upload_to='Posts_Imagies/', blank=True, null=True)
    
   
    def __str__(self):
        return self.title

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Ticket(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.TextField(blank=True, default='')
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(default = timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = "Ticket"
        verbose_name_plural = "Tickets"

    def __unicode__(self):
        return self.title

class Post(models.Model):
    comment = models.TextField(max_length=255,blank=True, default='')
    created_at = models.DateTimeField(default = timezone.now)
    ticket = models.ForeignKey(Ticket, on_delete= models.CASCADE)
    author = models.ForeignKey(User, on_delete= models.CASCADE)
    
    class Meta:
        verbose_name = "Commentaire"
        verbose_name_plural = "Commentaires"

    def __unicode__(self):
        return self.comment
    
class Attachement(models.Model):
    file = models.FileField(upload_to ='uploads/')
    created_at = models.DateTimeField(default = timezone.now)
    post = models.ForeignKey(Post, on_delete= models.CASCADE)
    author = models.ForeignKey(User, on_delete= models.CASCADE)
    
    class Meta:
        verbose_name = "Attachment"
        verbose_name_plural = "Attachments"

    def __unicode__(self):
        return self.file
from rest_framework import serializers 
from assistance.models import Post

class PostSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Post
        fields = ('id',
                  'comment',
                  'created_at',
                  'author',
                  'ticket')
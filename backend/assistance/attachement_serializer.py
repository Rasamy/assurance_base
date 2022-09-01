from rest_framework import serializers 
from assistance.models import Attachement

class AttachementSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Attachement
        fields = ('id',
                  'file',
                  'created_at',
                  'author',
                  'post')
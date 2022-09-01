from rest_framework import serializers 
from assistance.models import Ticket

class TicketSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Ticket
        fields = ('id',
                  'title',
                  'description',
                  'author')
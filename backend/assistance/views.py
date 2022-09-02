from django.shortcuts import render
from django.http.response import JsonResponse
from django.contrib.auth import authenticate

from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from assistance.models import Ticket, Post, Attachement
from assistance.post_serializer import PostSerializer
from assistance.ticket_serializer import TicketSerializer
from assistance.attachement_serializer import AttachementSerializer

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def ticket_list(request):
    
    if request.method == 'GET':
        if request.user.is_superuser:
            tickets = Ticket.objects.all()
        else:
            tickets = Ticket.objects.filter(author=request.user.id) 
        title = request.query_params.get('title', None)
        if title is not None:
            tickets = tickets.filter(title__icontains=title)
        
        tickets_serializer = TicketSerializer(tickets, many=True)
        return JsonResponse(tickets_serializer.data, safe=False)
        

    elif request.method == 'POST':
        ticket_data = JSONParser().parse(request)
        ticket_serializer = TicketSerializer(data=ticket_data)
        if ticket_serializer.is_valid():
            ticket_serializer.save()
            return JsonResponse(ticket_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(ticket_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        if request.user.is_superuser:
            count = Ticket.objects.all().delete()
            return JsonResponse({'message': '{} tickets were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
        else:
            count = Ticket.objects.filter(author=request.user.id).delete()
            return JsonResponse({'message': '{} tickets were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
    

        

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def ticket_detail(request, pk):
    
    try: 
        ticket = Ticket.objects.get(pk=pk) 
    except ticket.DoesNotExist: 
        return JsonResponse({'message': 'The ticket does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        ticket_serializer = TicketSerializer(ticket) 
        return JsonResponse(ticket_serializer.data) 
 
    elif request.method == 'PUT': 
        ticket_data = JSONParser().parse(request) 
        ticket_serializer = TicketSerializer(ticket, data=ticket_data) 
        if ticket_serializer.is_valid(): 
            ticket_serializer.save() 
            return JsonResponse(ticket_serializer.data) 
        return JsonResponse(ticket_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        ticket.delete() 
        return JsonResponse({'message': 'ticket was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    


"""
    Views for the post
"""


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def post_list(request):
    
    if request.method == 'GET':
        if request.user.is_superuser:
            posts = Post.objects.all()
        else:
            posts = Post.objects.filter(author=request.user.id)
        
        title = request.query_params.get('title', None)
        if title is not None:
            posts = posts.filter(title__icontains=title)
        
        posts_serializer = PostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)
        

    elif request.method == 'POST':
        Post_data = JSONParser().parse(request)
        Post_serializer = PostSerializer(data=Post_data)
        if Post_serializer.is_valid():
            Post_serializer.save()
            return JsonResponse(Post_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(Post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        if request.user.is_superuser:
            count = Post.objects.all().delete()
            return JsonResponse({'message': '{} posts were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
        else:
            count = Post.objects.filter(author=request.user.id).delete()
            return JsonResponse({'message': '{} posts were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
               

 
 
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def post_detail(request, pk):
    try: 
        post = Post.objects.get(pk=pk) 
    except post.DoesNotExist: 
        return JsonResponse({'message': 'The Post does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        Post_serializer = PostSerializer(post) 
        return JsonResponse(Post_serializer.data) 
 
    elif request.method == 'PUT': 
        Post_data = JSONParser().parse(request) 
        Post_serializer = PostSerializer(post, data=Post_data) 
        if Post_serializer.is_valid(): 
            Post_serializer.save() 
            return JsonResponse(Post_serializer.data) 
        return JsonResponse(Post_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        post.delete() 
        return JsonResponse({'message': 'Post was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
    
"""
    Views for the Attachement
"""


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def attachement_list(request):

    if request.method == 'GET':
        if request.user.is_superuser:
            Attachements = Attachement.objects.all()
        else:
            Attachements = Attachement.objects.filter(author=request.user.id)
    
        title = request.query_params.get('title', None)
        if title is not None:
            Attachements = Attachements.filter(title__icontains=title)
        
        Attachements_serializer = AttachementSerializer(Attachements, many=True)
        return JsonResponse(Attachements_serializer.data, safe=False)

    elif request.method == 'POST':
        Attachement_data = JSONParser().parse(request)
        Attachement_serializer = AttachementSerializer(data=Attachement_data)
        if Attachement_serializer.is_valid():
            Attachement_serializer.save()
            return JsonResponse(Attachement_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(Attachement_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        if request.user.is_superuser:   
            count = Attachement.objects.all().delete()
            return JsonResponse({'message': '{} Attachements were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
        else:
            count = Attachement.objects.filter(author=request.user.id).delete()
            return JsonResponse({'message': '{} Attachements were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

       
    
  
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def attachement_detail(request, pk):
    try: 
        attachement = Attachement.objects.get(pk=pk) 
    except attachement.DoesNotExist: 
        return JsonResponse({'message': 'The Attachement does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        Attachement_serializer = AttachementSerializer(Attachement) 
        return JsonResponse(Attachement_serializer.data) 
 
    elif request.method == 'PUT': 
        Attachement_data = JSONParser().parse(request) 
        Attachement_serializer = AttachementSerializer(Attachement, data=Attachement_data) 
        if Attachement_serializer.is_valid(): 
            Attachement_serializer.save() 
            return JsonResponse(Attachement_serializer.data) 
        return JsonResponse(Attachement_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        Attachement.delete() 
        return JsonResponse({'message': 'Attachement was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

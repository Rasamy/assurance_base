from django.urls import path
from assistance import views 
 
urlpatterns = [ 
    path('ticket', views.ticket_list),
    path('ticket/<int:pk>', views.ticket_detail),
    path('post', views.post_list),
    path('post/<int:pk>', views.post_detail),
    path('attachement', views.attachement_list),
    path('attachement/<int:pk>', views.attachement_detail),
]
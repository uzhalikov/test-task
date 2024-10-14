from django.urls import path
from .views import get_logs, get_log

urlpatterns = [
    path('logs/', get_logs),
    path('logs/<int:log_id>', get_log),
]
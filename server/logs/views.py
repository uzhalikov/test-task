from django.http import JsonResponse
from .models import Logs

def get_logs(request):
    logs = Logs.objects.all().values("id", "computer_name", "event_type", "created")
    return JsonResponse(list(logs), safe=False)

def get_log(request, log_id):
    log = Logs.objects.filter(id=log_id).values()
    return JsonResponse(list(log), safe=False)
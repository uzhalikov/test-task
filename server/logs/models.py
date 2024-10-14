from django.db import models

class Logs(models.Model):
    computer_name = models.CharField(max_length=100)
    event_type = models.CharField(max_length=50)
    application = models.CharField(max_length=100)
    window_title = models.CharField(max_length=100)
    content = models.CharField(max_length=255)
    screenshot = models.ImageField(upload_to='screenshot/')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.computer_name} - {self.event_type}"

    class Meta:
        verbose_name_plural = 'Logs'
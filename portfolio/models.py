from django.db import models




class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    thumbnail = models.ImageField(
        upload_to="thumbnails/",
        blank=True,
        null=True
    )

    video = models.FileField(
        upload_to="videos/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
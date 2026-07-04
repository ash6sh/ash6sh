from django.shortcuts import render
from .models import Project

def home(request):
    projects = Project.objects.order_by("-created_at")[:6]
    return render(request, "portfolio_1/home.html", {"projects": projects})


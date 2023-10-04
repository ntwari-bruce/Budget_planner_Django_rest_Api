from django.urls import path
from . import views

urlpatterns = [
    # api budget planner
    path('', views.expenses_list_create_view, name='expenses-list'),
    path('total_budget/', views.budget_view, name='total-budget'),
    path('remaining/', views.remaining_view, name='remaining')
]
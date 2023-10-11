from django.urls import path
from . import views

urlpatterns = [
    # api budget planner
    path('', views.expenses_list_create_view, name='expenses-list'),
    path('total_budget/', views.budget_view, name='total-budget'),
    path('update_budget/<int:pk>/', views.budget_update_view, name='budget_update'),
    path('total_expenses/', views.total_expenses_view, name='total_expenses'),
    path('delete_expense/<int:pk>/',views.delete_expense_view, name='delete_expense'),
    path('search-expenses/', views.expense_search_view, name='search-expense')
]
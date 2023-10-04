from rest_framework import generics
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Expense, ExpenseCategory, Budget, Remaining

from .serializers import ExpenseSerializer, ExpenseCateroySerializer, BudgetSerializer, RemainingSerializer

class ExpensesListCreateAPIView(
    generics.ListCreateAPIView):
    
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


expenses_list_create_view = ExpensesListCreateAPIView.as_view()

    
class BudgetListCreateAPIView(
    generics.ListCreateAPIView
):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer

budget_view = BudgetListCreateAPIView.as_view()


class RemainingListCreateAPIView(
    generics.ListCreateAPIView
):
    queryset = Budget.objects.all()
    serializer_class = RemainingSerializer

remaining_view = RemainingListCreateAPIView.as_view()
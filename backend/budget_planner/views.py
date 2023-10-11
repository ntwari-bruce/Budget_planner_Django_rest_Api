from rest_framework import generics
from rest_framework.views import APIView
from decimal import Decimal
from django.db.models import Sum
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Expense, Budget
from .serializers import ExpenseSerializer,BudgetSerializer, TotalExpensesSerializer

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

class BudgetUpdateAPIView(
    generics.UpdateAPIView
):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    lookup_field = "pk"


budget_update_view = BudgetUpdateAPIView.as_view()

class TotalExpensesAPIView(APIView):
    def get(self, request):
        total_expenses = Expense.objects.aggregate(total_cost=Sum('cost'))['total_cost'] or Decimal('0.00')
        serializer = TotalExpensesSerializer({'total_expenses': total_expenses})
        return Response(serializer.data)
total_expenses_view = TotalExpensesAPIView.as_view()

class DeleteExpenseAPIView(
    generics.DestroyAPIView
):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    lookup_field = "pk"
delete_expense_view = DeleteExpenseAPIView.as_view()

class SearchExpenseAPIView(
    generics.ListAPIView
):
    serializer_class= ExpenseSerializer
    def get_queryset(self):
        query = self.request.GET.get('q','')
        queryset = Expense.objects.filter(name__icontains=query) | Expense.objects.filter(cost__icontains=query)
        return queryset
expense_search_view = SearchExpenseAPIView.as_view()

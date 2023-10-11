from rest_framework import serializers
from . models import Expense, Budget

    
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'
    
class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
class TotalExpensesSerializer(serializers.Serializer):
    total_expenses = serializers.DecimalField(decimal_places=2, max_digits=10)

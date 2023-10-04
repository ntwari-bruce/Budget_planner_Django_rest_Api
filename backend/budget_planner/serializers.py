from rest_framework import serializers
from . models import ExpenseCategory, Expense, Budget, Remaining

class ExpenseCateroySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseCategory
        fields = '__all__'
    
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'
    
class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
class RemainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Remaining
        fields = '__all__'
from django.db import models

class ExpenseCategory(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name 

class Expense(models.Model):
    name = models.CharField(max_length=1000)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(ExpenseCategory, on_delete=models.CASCADE)


    def __str__(self):
        return f"{self.name} costs {self.cost}"

class Budget(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)

class Remaining(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)

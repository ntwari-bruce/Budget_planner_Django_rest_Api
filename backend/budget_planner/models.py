from django.db import models


class Expense(models.Model):
    name = models.CharField(max_length=1000)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"{self.name} costs {self.cost}"

class Budget(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        # Ensure there's only one budget in the database
        if not self.pk and Budget.objects.exists():
            existing_budget = Budget.objects.first()
            existing_budget.amount = self.amount
            existing_budget.save()
            return existing_budget
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f'Budget: ${self.amount}'




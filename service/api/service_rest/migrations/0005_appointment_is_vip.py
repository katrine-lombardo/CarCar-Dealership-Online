# Generated by Django 4.0.3 on 2023-10-27 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_appointment_vin_alter_automobilevo_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='is_vip',
            field=models.BooleanField(default=False),
        ),
    ]

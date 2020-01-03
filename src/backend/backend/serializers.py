from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# serializers define the api representation
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'is_staff', 'email']

# Viewsets define the view behaviour
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Routers provide an easy way to automatically determining the URL conf
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


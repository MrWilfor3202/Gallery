from django.urls import path, include
from .views import ArticleViewSet,UserViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='artilces')
router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    path('Posts_Imagies/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
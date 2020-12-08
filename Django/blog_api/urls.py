
from .views import PostList, PostDetail
# from rest_framework.routers import DefaultRouter
from django.urls import path

app_name = 'blog_api'


urlpatterns = [
    path('posts/<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    # path('search/', PostListDetailfilter.as_view(), name='postsearch'),
    path('', PostList.as_view(), name='listcreate'),
]

# router = DefaultRouter()
# router.register('', PostList, basename='post')
# urlpatterns = router.urls


# urlpatterns = [
#     path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
#     path('', PostList.as_view(), name='listcreate'),
# ]

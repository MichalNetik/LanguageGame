import jwt
import json
from rest_framework import views
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.models import User


@authentication_classes([])
@permission_classes([])
class SignUp(views.APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']

        User.objects.create_user(
            username=username,
            password=password
        )

        return JsonResponse(
            {'username': username, 'password': password},
            status=200,
            content_type="application/json"
        )


@authentication_classes([])
@permission_classes([])
class Login(views.APIView):
    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide username/password"}, status="400")

        username = request.data['username']
        password = request.data['password']

        user = authenticate(username=username, password=password)
        if user:
            payload = {
                'id': user.id,
                'username': user.username,
            }
            jwt_token = jwt.encode(payload, "SECRET_KEY").decode('utf-8')

            response_data = {
                'username': user.username,
                'token': jwt_token
            }
            return JsonResponse(
                response_data,
                status=200,
                content_type="application/json"
            )
        else:
            return Response(
                json.dumps({'Error': "Invalid credentials"}),
                status=400,
                content_type="application/json"
            )

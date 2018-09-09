import jwt
import json
from rest_framework import views
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib.auth.models import User

class SignUp(views.APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']

        new_user = User()
        new_user.username = username
        new_user.password = password
        new_user.save()

        return JsonResponse(
            json.dumps(new_user),
            status=200,
            content_type="application/json"
        )

class Login(views.APIView):
    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide username/password"}, status="400")
        
        username = request.data['username']
        password = request.data['password']
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            return Response({'Error': "Invalid username/password"}, status="400")
        if user:  
            payload = {
                'id': user.id,
                'username': user.username,
            }
            jwt_token = jwt.encode(payload, "SECRET_KEY")

            response_data = {
                username: user.username,
                token: jwt_token
            }
            return JsonResponse(
                json.dumps(response_data),
                status=200,
                content_type="application/json"
            )
        else:
            return Response(
              json.dumps({'Error': "Invalid credentials"}),
              status=400,
              content_type="application/json"
            )
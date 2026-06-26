# EP3 - Orquestación y Automatización en AWS

## Integrantes
- Tomas Delfierro
- Karen Fuentealba


## Arquitectura implementada
- **Orquestación**: AWS ECS con Fargate
- **Contenedores**: Docker
- **Registro de imágenes**: Amazon ECR
- **Balanceo de carga**: Application Load Balancer (ALB)
- **Logs**: CloudWatch
- **CI/CD**: GitHub Actions

## Servicios desplegados
- Frontend: Puerto 80
- Backend: Puerto 3000

## Pipeline CI/CD
El pipeline realiza:
1. Checkout del código
2. Login en AWS
3. Build de imágenes Docker
4. Push a Amazon ECR
5. Deploy automático en ECS

## Variables y secrets usados
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- AWS_ACCOUNT_ID
- ECS_CLUSTER
- ECS_FRONTEND_SERVICE
- ECS_BACKEND_SERVICE

## Evidencias
[Agregar capturas de pantalla]

## Validación funcional
- Frontend: http://ep3-alb-809675478.us-east-1.elb.amazonaws.com
- Backend health check: http://ep3-alb-809675478.us-east-1.elb.amazonaws.com/api/health

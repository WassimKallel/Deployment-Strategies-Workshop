# Deployment Strategies Workshop

## Requirements
- Kubernetes cluster
- Kubectl + Kustomize
- Istio Service Mesh
- Kiali Dashboard (to showcase the traffic flow)

## Steps
1. Have everything from the requirements installed first
2. Using Kustomize apply both v1 and v2 of each miscroservice
  ```
  kubectl apply -k infrastructure/overlays/v1
  kubectl apply -k infrastructure/overlays/v2
  ```
3. Create an istio gateway
  ```
  kubectl apply -f infrastructure/01-gateway.yaml
  ```
4. Create a destination rule that contains two subsets *v1* and *v2*
  ```
  kubectl apply -f infrastructure/02-destination-rule.yaml
  ```

## Strategies

Now it's time to play with different deployment strategies

### Canary
```
kubectl apply -f infrastructure/03_1-virtualservice-canary.yaml
```
### A/B testing
```
kubectl apply -f infrastructure/03_2-virtualservice-ab.yaml
```
### Shadow
```
kubectl apply -f infrastructure/03_3-virtualservice-shadow.yaml
```

# Configuration EmailJS - Guide complet

## 🎯 Vue d'ensemble

EmailJS permet d'envoyer des emails directement depuis votre site sans serveur backend. C'est gratuit (jusqu'à 200 emails/mois) et très simple à configurer.

## 📝 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur **https://www.emailjs.com/**
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Créez un compte avec votre email

### 2. Configurer un service email (Gmail, Outlook, etc.)

#### Option A : Gmail (recommandé pour commencer)

1. Allez dans **Dashboard** (après connexion)
2. Cliquez sur **"Add Service"**
3. Sélectionnez **Gmail**
4. Cliquez sur **"Connect Account"**
5. Autorisez EmailJS à accéder à votre Gmail
6. Notez votre **Service ID** (ex: `service_abc123`)

#### Option B : Utiliser SMTP personnalisé

Si vous avez un serveur SMTP:
1. **Add Service** > **Other**
2. Remplissez vos détails SMTP

### 3. Créer des templates d'email

#### Template pour l'utilisateur (confirmation)

1. Allez dans **Email Templates** (dans le menu de gauche)
2. Cliquez sur **"Create New Template"**
3. Nommez-le : `contact_form_client`
4. Collez ce contenu :

```html
<h2>Merci pour votre demande !</h2>
<p>Bonjour {{firstName}},</p>

<p>Votre demande de rendez-vous a bien été reçue. 
Nous vous contacterons dans les plus brefs délais au <strong>{{phone}}</strong>.</p>

<h3>Détails de votre demande :</h3>
<ul>
  <li><strong>Nom:</strong> {{firstName}} {{lastName}}</li>
  <li><strong>Véhicule:</strong> {{vehicleType}}</li>
  <li><strong>Service:</strong> {{service}}</li>
  <li><strong>Message:</strong> {{message}}</li>
  <li><strong>Carte grise jointe:</strong> {{hasImage}}</li>
</ul>

<p>Cordialement,<br/>L'équipe VehiGlass</p>
```

5. En bas, remplacez **To Email** par `{{email}}`
6. Remplacez **Subject** par `Confirmation de votre demande - VehiGlass`
7. Cliquez sur **Save**

#### Template pour l'admin (optionnel mais recommandé)

1. **Create New Template**
2. Nommez-le : `contact_form_admin`
3. Collez ce contenu :

```html
<h2>Nouvelle demande de rendez-vous</h2>

<h3>Informations client :</h3>
<ul>
  <li><strong>Prénom:</strong> {{firstName}}</li>
  <li><strong>Nom:</strong> {{lastName}}</li>
  <li><strong>Email:</strong> {{email}}</li>
  <li><strong>Téléphone:</strong> {{phone}}</li>
</ul>

<h3>Détails du service :</h3>
<ul>
  <li><strong>Véhicule:</strong> {{vehicleType}}</li>
  <li><strong>Service souhaité:</strong> {{service}}</li>
  <li><strong>Message:</strong> {{message}}</li>
  <li><strong>Carte grise jointe:</strong> {{hasImage}}</li>
</ul>

<p><em>Carte grise (base64): {{imageBase64}}</em></p>
```

4. En bas, remplacez **To Email** par votre email admin (ex: `vehiglass64@gmail.com`)
5. Remplacez **Subject** par `Nouvelle demande VehiGlass - {{firstName}} {{lastName}}`
6. Cliquez sur **Save**

### 4. Récupérer vos identifiants

1. Allez dans **Account** (menu en bas à gauche)
2. Copiez votre **User ID**
3. Allez dans **Email Services** et notez votre **Service ID**
4. Allez dans **Email Templates** et notez vos **Template IDs**

### 5. Configurer votre application

Ouvrez le fichier `src/emailjs-config.ts` et remplacez les valeurs :

```typescript
export const EMAILJS_CONFIG = {
  USER_ID: "YOUR_EMAILJS_USER_ID",              // Remplacez par votre User ID
  SERVICE_ID: "service_xxxxxxxxxxxx",           // Remplacez par votre Service ID
  TEMPLATE_ID: "template_client_xxxxx",         // Template pour l'utilisateur
  ADMIN_TEMPLATE_ID: "template_admin_xxxxx",    // Template pour l'admin
};
```

### 6. Tester votre configuration

1. Lancez votre site : `npm run dev`
2. Accédez à la page contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer ma demande"
5. Vérifiez votre email

## 🖼️ Gestion de l'image (Carte grise)

L'image est envoyée en **base64** dans le template EmailJS. 

**Limitations:**
- Maximum ~1-2 Mo par email (EmailJS gratuit)
- Le base64 peut être très long et rendre l'email volumineux

**Alternatives si l'image est trop grosse:**

1. **Utiliser un service de stockage gratuit** (Uploadcare, Firebase Storage)
2. **Demander à l'utilisateur d'envoyer l'image par email séparé**
3. **Augmenter la limite avec un plan payant EmailJS**

## 📋 Checklist finale

- [ ] Compte EmailJS créé
- [ ] Service Gmail/SMTP configuré
- [ ] Template client créé avec les bonnes variables
- [ ] Template admin créé (optionnel)
- [ ] User ID copié dans `emailjs-config.ts`
- [ ] Service ID copié dans `emailjs-config.ts`
- [ ] Template IDs copiés dans `emailjs-config.ts`
- [ ] Site testé et emails reçus

## ❓ Dépannage

### Je ne reçois pas d'emails
- Vérifiez les **User ID** et **Service ID**
- Vérifiez que les **Template IDs** sont corrects
- Vérifiez l'adresse email "To Email" dans les templates
- Consultez les **Logs** dans le Dashboard EmailJS

### L'image ne s'affiche pas
- Les images base64 ne s'affichent pas toujours dans les clients email
- Solution: Demandez à l'utilisateur de rejoindre un formulaire sans image, ou utilisez Uploadcare

### "Failed to send email"
- Vérifiez que le Service est activé dans **Email Services**
- Vérifiez que les variables dans les templates existent dans votre formulaire
- Vérifiez les logs du navigateur (F12 > Console)

## 💰 Tarifs (gratuit à partir de 200 emails/mois)

- **Gratuit**: 200 emails/mois
- **Pro**: 9€/mois pour 50 000 emails/mois
- [Voir les tarifs](https://www.emailjs.com/pricing)

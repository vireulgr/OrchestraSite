# for django

$EnvVars = @{
  'DJANGO_SETTINGS_MODULE' = 'backend.settings.development';
  'SECRET_KEY' = 'SECRET_KEY_DEV';
  'DB_USER' ='orchestraadmin';
  'DB_PASSWORD' ='P@ssw0rd';
  'DB_DATABASE' ='orchestrabackend';
}

foreach ($item in $EnvVars.GetEnumerator()) {
  Remove-Item -Path "Env:\$($item.Name)" -ErrorAction SilentlyContinue
  Write-host "Removed var: `$Env:\$($item.Name)"
}


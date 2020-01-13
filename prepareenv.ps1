# for django

$EnvVars = @{
  'DJANGO_SETTINGS_MODULE' = 'backend.settings.development';
  'SECRET_KEY' = 'SECRET_KEY_DEV';
  #'DB_USER' ='orchestraadmin';
  #'DB_PASSWORD' ='P@ssw0rd';
  'DB_DATABASE' ='C:\sqlitedb\orchestra.db';
}

foreach ($item in $EnvVars.GetEnumerator()) {
  $a = Get-Item -Path "Env:\$($item.Name)" -ErrorAction SilentlyContinue
  if ($a -ne $null) {
    Set-Item -Path "Env:\$($item.Name)" -Value $item.Value
  }
  else {
    New-Item -Name $item.Name -Value $item.Value -ItemType Variable -Path Env:  | Out-null
  }
  $a = Get-Item -Path "Env:\$($item.Name)"
  Write-Host "$($a.Name) = $($a.Value)"
}


<?php 

$liste = ["Clément", "Djibril", "Julien", "Lucas", "Marceau", "Mathieu", "Mélanie", "Noé", "Romain", "Sami", "Youssef"];

if(isset($_POST['search'])){
    $search = $_POST['search'];
    if(!empty($search)){//si la recherche n'est pas vide
        $lcsearch = strtolower($search);
        //objectif : afficher les éléments du tableau qui contiennent search
        //solution proposée : comparer chaque élément avec la recherche
        foreach($liste as $item){
            $lcitem = strtolower($item);
            //si l'élément du tableau commence par la recherche, je l'affiche
            if(str_starts_with($lcitem, $lcsearch)){
                echo $item.'<br/>';
            }
        }
    }
}
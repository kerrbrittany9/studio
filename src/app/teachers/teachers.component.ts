import { Component } from '@angular/core';
import { Teacher } from '../teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers: Teacher[] = [
    new Teacher("Jeanette Sager", "Hatha", "A lifelong ballerina, Jeannette first started yoga when she had trouble finding adult ballet classes. Her second yoga class left her feeling like she 'was flying on a unicorn with wings.'' After that – she was hooked. Jeannette started teaching restorative yoga as a way to work with a family member with limited mobility and found herself branching into many other areas of teaching over the years – including hatha and vinyasa, to working with kids and even bringing yoga into prisons. Teaching yoga has been a humbling, rewarding and sanity-maintaining experience through many years of grad school. Even after racking up a pile of degrees, she can't imagine a life without teaching! Sharing the practices that have helped reduce stress and instill a mindset of self-compassion and acceptance, in her own life.", "Morning Meditation Series", "https://static1.squarespace.com/static/57eb10cc725e25b5bb128818/57ec88f1725e2504023e18b0/580528cf8419c2947e4f38e2/1493165094267/Jeanette-Sager-3_crop.jpg?format=300w", 1),
    new Teacher("Michelina Payetta", "Vinyasa", "Michelina is a registered yoga teacher with Yoga Alliance with a strong education in Kinesiology. Through yoga, Michelina has found overall balance and self-acceptance – allowing her to soften, and create a healthier way of living. She views yoga as a way to exercise not only her body – but her entire being – and describes the practice as “life-changing.” Michelina feels that yoga can be whatever you want and/or need it to be. For her, yoga is not only essential therapy and medicine, but it is her lifestyle. She intends for her classes to inspire a deeper connection to mind-body awareness, breath, mental clarity, physical strength and ultimately to make you feel more united with yourself. Michelina enjoys infusing yoga philosophy, concepts, quotes, and genuine life happenings into her classes. It is her passion to share the gift of yoga with you.", "Handstand Practice", "https://static1.squarespace.com/static/57eb10cc725e25b5bb128818/57ec88f1725e2504023e18b0/58052f32e58c62df75eb3e5f/1496965262631/MichelinaPayetta4_crop.jpg?format=300w", 2)
  ];
}

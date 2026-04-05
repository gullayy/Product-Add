create table if not exists public.product(
    id uuid default gen_random_uuid() primary key,
    title text not null,
    price numeric(10 , 3) not null ,
    category text,
    image_url text,
    in_stock boolean default true,
    created_at timestamptz default now()
);

alter table public.product enable row level security;

create policy "Public read " on public.product for select using (true);
create policy "Public insert " on public.product for insert with check (true); 
create policy "Public update" on public.product for update using (true) with check (true);
create policy "Public delete" on public.product for delete using (true);